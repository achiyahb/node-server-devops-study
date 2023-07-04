import axios from "axios";
import {createServer} from "http";


const server = createServer(async (req, res) => {
    const { url, method,} = req
    console.log(url, method)
    if(url?.split('?todoNumber=')[1]){
        const todoNumber = url.split('?todoNumber=')[1]
        const data  = await fetchSomething(+todoNumber)
        console.log(data)
        res.write(JSON.stringify(data))
        return res.end()
    }
    res.end('Hello from server ' + url)
})


server.listen(8020, () => {
    console.log('Server is listening on port 8020')
})

const fetchSomething = async (todoNumber:number) => {
    console.log('send request')
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    console.log(response.data)
    return response.data
}


