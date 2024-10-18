import useFetch from "./useFetch";
/**
 * 
 * @param {number} userId
 * @returns 
 */
function useScore(userId: number) {
    const { data, loading, error } = useFetch(`http://localhost:3000/user/${userId}`);
    return { data, loading, error };
}

function useActivity(userId: number) {
    const { data, loading, error } = useFetch(`http://localhost:3000/user/${userId}/activity`);
    return { data, loading, error };
}

function usePerformance(userId: number) {
    const { data, loading, error } = useFetch(`http://localhost:3000/user/${userId}/performance`);
    return { data, loading, error };
}


function useAverageSessions(userId: number) {
    const { data, loading, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
    return { data, loading, error };
}


export { useActivity, useAverageSessions, usePerformance, useScore };
