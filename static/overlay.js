function addGoal(goalText, user) {
    let username = document.createElement('a');
    username.setAttribute('class', 'userGoal');
    username.textContent = "("+user+")";

    let message = document.createElement('a');
    message.setAttribute('class', 'messageGoal');
    message.setAttribute('id', user+"-goal");
    message.textContent = goalText;

    let goal = document.createElement('div');
    goal.setAttribute('id', "goal");
    goal.setAttribute('class', "goal");
    goal.appendChild(username);
    goal.appendChild(message);

    document.getElementById("goals").appendChild(goal);
}

function doneGoal(user) {
    document.getElementById(user+"-goal").style.textDecoration = "line-through";
}

function editGoal(user, newGoal) {
    document.getElementById(user+"-goal").style.textDecoration = "none";
    document.getElementById(user+"-goal").textContent = newGoal;
}
