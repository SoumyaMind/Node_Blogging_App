export const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
};

export const formatResponse = (data, message = 'Success') => {
    return {
        message,
        data,
    };
};