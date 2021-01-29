function tempo(request, response){
    const dynamicDate = new Date();

    response.jason({
        date: dynamicDate.toUTCString()
    })
}

export default tempo;