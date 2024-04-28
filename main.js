const goal = document.getElementById('goal');
const goalText = document.getElementById('goaltext');
const add = document.getElementById('add');
const container=document.querySelector('.maincontainer');
const alltask=(localStorage.getItem('alltask'))?JSON.parse(localStorage.getItem('alltask')):[];
displaytask();

    function displaytask(){
        alltask.forEach((value,index)=>{
        
        const div=document.createElement('div');
        div.setAttribute('class','text');

        const innerdiv=document.createElement('div');
        div.append(innerdiv);

        const p=document.createElement('p');
        p.textContent=value.goal;
        innerdiv.append(p);

        const span=document.createElement('span');
        span.textContent=value.goalText;
        innerdiv.append(span);

        const button=document.createElement('button');
        button.textContent='-';
        button.addEventListener('click',()=>{
            deletetask();
            alltask.splice(index,1);
            localStorage.setItem('alltask',JSON.stringify(alltask));
            displaytask();
            console.log(alltask);
        });
        div.append(button);

        container.append(div);});
    }

     function deletetask(){
        alltask.forEach((value,index)=>{
            const div=document.querySelector('.text');
            div.remove();});
        }

    add.addEventListener('click', () => {
        deletetask();
        
        alltask.push({
         goal :goal.value,
         goalText : goalText.value,});
        console.log(alltask);
        displaytask();
        localStorage.setItem('alltask',JSON.stringify(alltask));
    });