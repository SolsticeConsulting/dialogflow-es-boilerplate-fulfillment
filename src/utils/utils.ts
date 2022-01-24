export const formatDummyData = (data: any) => {
    return JSON.stringify(data.data[0]);
}

export const createContext = (name: string, parameters: {}, lifespan = 1) => {
    return {
        name,
        parameters,
        lifespan
    }
}