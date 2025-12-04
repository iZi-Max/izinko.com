import { useState, useEffect } from 'react';

export const useStats = (birthDate) => {
    const calculateAgeAndProgress = () => {
        const today = new Date();
        const birthMonth = birthDate.getMonth();
        const birthDay = birthDate.getDate();

        // 1. Calculate Age
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
            age--;
        }

        // 2. Calculate Progress (Percentage of the year passed since last birthday)
        const lastBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
        if (lastBirthday > today) {
            lastBirthday.setFullYear(today.getFullYear() - 1);
        }

        const nextBirthday = new Date(lastBirthday);
        nextBirthday.setFullYear(lastBirthday.getFullYear() + 1);

        const totalDaysInCycle = (nextBirthday.getTime() - lastBirthday.getTime()) / (1000 * 60 * 60 * 24);
        const daysPassed = (today.getTime() - lastBirthday.getTime()) / (1000 * 60 * 60 * 24);

        const progressPercentage = Math.min(100, (daysPassed / totalDaysInCycle) * 100);

        return { age, progressPercentage: Math.round(progressPercentage) };
    };

    const [personalStats, setPersonalStats] = useState(calculateAgeAndProgress);

    useEffect(() => {
        // Update immediately when birthDate changes
        setPersonalStats(calculateAgeAndProgress());

        const timer = setInterval(() => {
            setPersonalStats(calculateAgeAndProgress());
        }, 60000);

        return () => clearInterval(timer);
    }, [birthDate]);

    return personalStats;
};
