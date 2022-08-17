export default () => ({
    isLoading: true, 
    entries: [
        {
            id: new Date().getTime(),
            data: new Date().toDateString(),
            text: 'Lorem Ipsum',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            data: new Date().toDateString(),
            text: 'Lorem Ipsum',
            picture: null,
        },
    ]
})