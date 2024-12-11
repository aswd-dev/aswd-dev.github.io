function atm(balance, withdraw)
{
    if(withdraw > balance)
    {
        return "Not enough money in your bank account!";
    }
    else if(withdraw > 0 && withdraw <= balance)
    {
        return `Amount remained in your account is: ${balance - withdraw} Euro`; 
    }
    else if(withdraw <= 0)
    {
        return "Please insert a valid number!";
    }

}

let withdraw = parseInt(prompt("Please insert the amount you want to withdraw: "));

console.log (atm(10000,withdraw));