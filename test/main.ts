import { createCompletion, loadModel } from 'gpt4all'

async function main(params?:any) {
    const model = await loadModel('tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf', { modelPath: "./data", verbose: true });
    
    console.log("here 0")
    const response = await createCompletion(model, [
        { role : 'user', content: 'What is 1 + 1?'  } 
    ]);
    console.log("here 1")
    console.log(response.choices[0].message.content);
}

main()