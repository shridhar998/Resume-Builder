const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
        })
    return newEditor

}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
    workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor => {
    Academic = nEditor
})
let Project;
TextEditor(inputfields["projects"]).then(nEditor => {
    Project = nEditor
})
let Skill;
TextEditor(inputfields["skills"]).then(nEditor => {
    Skill = nEditor
})
let Ach;
TextEditor(inputfields["achievements"]).then(nEditor => {
    Ach = nEditor
})


function toggle() {
    if (inputShow) {
        inputfields.style.display = "none"
        inputShow = false
        output.innerHTML = `
           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
            <h3>${inputfields["gender"].value}</h3>
           </div>
           <div class="main">
               <div>
                 <h2>OBJECTIVE</h2>
                 <p>${inputfields["objective"].value}</p>
                 <h2>SKILLS</h2>
                 ${Skill.getData()}
                 <h2>ACHIEVEMENTS</h2>
                 ${Ach.getData()}
                 <h2>CONTACT</h2> 
                 <p>${inputfields["contact"].value}</p>
               </div>
               <div>
                <h2>WORK EXPERIENCE</h2>
                ${workExpdetails.getData()}
                <h2>ACEMEDIC DETAILS</h2>
                 ${Academic.getData()}
                <h2>PROJECTS</h2>
                ${Project.getData()}
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    } else {
        inputfields.style.display = "block"
        inputShow = true
        output.innerHTML = ""
    }
}