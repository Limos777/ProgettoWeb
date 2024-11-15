/* eslint-disable no-console */
let nome: string | null = "";
let password: string | null = "";
let password1: string | null = "";
const valoremerda: string | null = "";

function promptwithcontrol(message: string)
{
    let value = prompt(message);
    if (!value)
    {
        value = prompt("Valore non valido.\n" + message);
    }
    return value;
}

function main() : string
{
    nome = prompt("inserisci il tuo nome utente: ");
    if ((nome === null) || (nome === ""))
    {
        promptwithcontrol("lo username non è valido, rinserisci il tuo nome utente: ");
    }
    else
    {
        console.log ("benvenuto " + nome);

        password = prompt ("Inserisci la tua password: ");
        password1 = prompt ("Rinserisci la tua password: ");
    }
    if ((password1 != password) || (nome === null) || (nome === ""))
    {
        alert ("Registrazione fallita.");
        do
        {
            alert ("Riprovare!");
            password1 = prompt ("Rinserisci la tua password: ");
        } while ((password1 != password) || (nome === null) || (nome === ""));
    }
    alert ("Registrazione ok!");

    return nome;
}
main();
promptwithcontrol(valoremerda);
