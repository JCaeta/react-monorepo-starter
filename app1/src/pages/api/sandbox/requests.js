import axios from "axios";

import io from "socket.io-client";

const url = "http://localhost:5000"

export const socket = io(url)
export async function sendMessage(message) {
    console.log(' ')
    console.log('requests sendMessage')
    console.log('socket: ', socket)
    try {
        // Emit a 'message' event to the server with the user's message
        socket.emit('message', message)
    } catch (error) {
        console.error("Error sending message:", error)
        throw error
    }
}






// // Event listener for the 'result' event
// socket.on('result', (data) => {
//     console.log("Received result:", data)
//     // Handle the result from the server as needed
//     // For example, update the UI with the result
// })






// export async function getQR(){
//     const response = await axios.get<any>(url + '/qrcode');
//     return response;
// }

// export async function postMessage(message) {
//     try {
//         // Send a POST request to the server with the message using HTTP
//         const response = await axios.post(`${url}/post-message`, { message });
//         console.log("Server response:", response.data);
        
//         // Emit a 'message' event to the server with the message using web sockets
//         socket.emit('message', message);
//     } catch (error) {
//         console.error("Error posting message:", error);
//         throw error;
//     }
// }
