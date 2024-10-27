const calculate = () => {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("startingbid").value);

    if (!name || !price) {
        alert("Please enter both name and starting bid.");
        return;
    }

    const education = Number(document.getElementById("education").value);
    price *= education;

    const networth = Number(document.getElementById("networth").value);
    price *= networth;

    const age = document.getElementsByName("age");
    price = getRadioValue(age, price);

    const reputation = document.getElementsByClassName("reputation");
    price = getCheckboxValuesForLoop(reputation, price);

    const caste = Number(document.getElementById("caste").value);
    price += caste;

    const skills = document.getElementsByClassName("skills");
    price = getCheckboxValuesForLoop(skills, price);

    let love_letter = document.getElementById("loveletter").value;

    document.getElementById("result").innerHTML = `The price for ${name} is $${price.toFixed(2)}. Your love letter: "${love_letter}"`;
};

const getCheckboxValuesForLoop = (html_collection, price) => {
    for (let i = 0; i < html_collection.length; i++) {
        if (html_collection[i].checked) {
            price += Number(html_collection[i].value);
        }
    }
    return price;
};

const getRadioValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price *= Number(item.value);
        }
    });
    return price;
};

document.getElementById("submit").addEventListener("click", calculate);
