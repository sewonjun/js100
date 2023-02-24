function solution(progresses, speeds) {
    var answer = [];
    const processingTask = [...progresses];
    let finishedTask = [];
    let taskLeft = 0;
    let flag = true;
    while (true) {
        if(!processingTask.length){
            break;
        }
        while(processingTask[0] < 100){
            for(let i = 0; i < processingTask.length; i++){
                processingTask[i] += speeds[i];
            }
        }
        console.log("processingTask", processingTask);
        for(let i = 0; i < processingTask.length; i++){
            let temp = 0;
            if(processingTask[i] < 100 ){
                processingTask.splice(0, i);
                speeds.splice(0, i);
                // console.log(processingTask, speeds);
                finishedTask.push(i);
                break;
            } else if (i === processingTask.length -1){
                processingTask.splice(0);
                speeds.splice(0);
                finishedTask.push(i+1)
            }
        }
        console.log(finishedTask, processingTask);
        // return true;
    }

    return finishedTask;
}

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
