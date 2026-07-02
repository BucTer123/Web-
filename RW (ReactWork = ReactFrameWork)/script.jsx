function Label(text_label, boolean_label) {
    if (boolean_label === "TRUE") {
        console.log(text_label);
        window.alert(text_label);
    }
}

function Button(text_button, boolean_button) {
    if (boolean_button == true ) {
        return (
            <button>{text_button}</button>
        );
    }
}

function Input(text_input, boolean_input) {
    if (boolean_input == true) {
        return (
            <input>{text_input}</input>
        );
    }
}

function Input_File(boolean_inputfile) {
    if (boolean_inputfile == true) {
        return (
            <input type="file"></input>
        );
    }
}

function Input_Range(boolean_inputrange) {
    if (boolean_inputrange == true) {
        return (
            <input type="range"></input>
        );
    }
}

function Label_Ul(text_ul, boolean_ul) {
    if (boolean_ul == true) {
        return (
            <ul>{text_ul}</ul>
        );
    }
}

function Label_Li(text_li, boolean_li) {
    if (boolean_li == true) {
        return (
            <li>{text_li}</li>
        );
    }
}

function Exit(status) {
    if (status === 0) {
        exit(0);
    } else {
        exit(1);
    }
}

function render_modules(argc, argv) {
    return (
        window.alert("....")
    );
}
