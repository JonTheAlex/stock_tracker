document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/form/data', {
        method: 'GET',
        headers: {'Content-Typye': 'application/json'},
        })
        
        const dropDownData = await response.json()
        populateDropDown(dropDownData)

    } catch(error){
        console.log(error)
    }
})

function populateDropDown(dropDownData){
    persons_select = document.querySelectorAll('.person-select')
    states_select = document.querySelectorAll('.state-select')
    const persons = dropDownData.persons
    const states = dropDownData.states

    persons_select.forEach((person_select) => {
        persons.forEach((person) => {
            let option = document.createElement('option')
            option.value = person._id
            option.innerHTML = person.name
            person_select.append(option)
        })
    })

    states_select.forEach((state_select) => {
        states.forEach((state) => {
            let option = document.createElement('option')
            option.value = state.abbreviation
            option.innerHTML = state.name
            state_select.append(option)
        })
    })
}      

    // persons.forEach((person) => {
    //     let option = document.createElement('option')
    //     option.value = person._id
    //     option.innerHTML = person.name
    //     person_select.forEach((person) => {
    //         person.append(option)
    //     })
    // })

    // states.forEach((state) => {
    //     let option = document.createElement('option')
    //     option.value = state.abbreviation
    //     option.innerHTML = state.name
    //     state_select.forEach((state) => {
    //         state.append(option)
    //     })
    // })

