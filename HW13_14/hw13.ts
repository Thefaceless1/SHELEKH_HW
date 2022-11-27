//Search line

const  searchLine =  {
    inputType : "text",
    size : "50",
    backgroundColor : "white",
    maxSymbols : 100,
    isDisabled : false
}

//Book info page

const bookInfoPage = {
    bookImage : {
        type : "image",
        size : "200х160px"
    },
    bookTitle : {
        type : "text",
        fontSize : "14",
        color : "black",
        isBoldFont : true,
        fontType : "Arial"
    },
    bookDescription : {
        type : "text",
        fontSize : "13",
        color : "black",
        isBoldFont : false,
        fontType : "Arial"
    },
    bookPrice : {
        type : "text",
        fontSize : "13",
        color : "green",
        isBoldFont : false,
        fontType : "Arial"
    },
    addToCard : {
        type : "image",
        size : "50х100px",
        imageSource : "https://www.sharelane.com/images/add_to_cart.gif"
    }
}

//Login elements

const loginElements = [

    {
        emailBlock: {
            emailinput: {
                inputtype: "email",
                size: "200х100px",
                backgroundColor: "white"
            },
            emailTitle: {
                type: "text",
                fontType: "Arial",
                color: "Black"
            }
        }
    },
    {
        passwordBlock: {
            passwordInput: {
                inputtype: "password",
                size: "200х100px",
                backgroundColor: "white"
            },
            passwordTitle: {
                type: "text",
                fontType: "Arial",
                color: "Black"
            }
        }
    },
    {
        loginButton: {
            type: "button",
            size: "150х100px",
            textColor: "Black",
            backgroundColor: "Grey",
            clickAction: "authorizes the user in the system"
        }
    },
    {
        signUpButton: {
            type: "text",
            size: "150х100px",
            textColor: "Black",
            backgroundColor: "Grey",
            clickAction: "open url: https://www.sharelane.com/cgi-bin/register.py"
        }
    }
]
