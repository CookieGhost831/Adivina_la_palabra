
player_1_name = localStorage.getItem("player_1_name");

player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;

player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + ":";

document.getElementById("player_2_name").innerHTML = player_2_name + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;

document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player_1_name;

document.getElementById("player_answer").innerHTML = "Turno para responder - " + player_2_name;

function send() {
    get_word = document.getElementById("word").value;

    word = get_word.toLowerCase();
    console.log("Palabra en minusculas=" + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    length_divide_2 = Math.floor(word.length / 2);

    charat2 = word.charAt(length_divide_2);
    console.log(charat2);

    length_minus_1 = word.length - 1;
    charat3 = word.charAt(length_minus_1);
    console.log(charat3);

    remove_charat1 = word.replace(charat1, "_");

    remove_charat2 = remove_charat1.replace(charat2, "_");

    remove_charat3 = remove_charat2.replace(charat3, "_");

    console.log(remove_charat3)

    question_word = "<h4 id='word_display'>Q." + remove_charat3 + "</h4>";

    input_box = "<br>Respuesta:<input type='text' id='input_check_box'>";

    check_button = "<br> <br> <button class='btn btn-info'onclick='check()'>Comprobar</button>";

    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row

    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {

    get_answer = document.getElementById("input_check_box").value

    answer = get_answer.toLowerCase();
    console.log("respuesta=" + answer);

    if (answer == word) {

        if (answer_turn == "player_1") {

            player_1_score = player_1_score + 1
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }
        else {
            player_2_score = player_2_score + 1;

            document.getElementById("player_2_score").innerHTML = player_2_score
        }
    }

    if (question_turn == "player_1") {

        question_turn = "player_2"

        document.getElementById("player_question").innerHTML = "Turno para preguntar -" + player_2_name;

    }

    else {

        question_turn = "player_1"

        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player_1_name;

    }

    if (answer_turn == "player_1") {

        answer_turn = "player_2"

        document.getElementById("player_answer").innerHTML = "Turno para responder -" + player_2_name;
    }
    else {

        answer_turn = "player_1"

        document.getElementById("player_answer").innerHTML = "Turno para responder -" + player_1_name;
    }

    document.getElementById("output").innerHTML = "";

     }


