
type DataWelcomeText = {
    firstName: any;
    isSucceed: boolean;
}

function WelcomeText({ dataWelcomeText }: { dataWelcomeText: DataWelcomeText }) {
    const isNight = new Date().getHours() >= 18;

    return (
        <div className="WelcomeText">
            <h1>{isNight ? "Bonsoir" : "Bonjour"} <span className='firstname'>{dataWelcomeText.firstName}</span></h1>
            <p>{dataWelcomeText.isSucceed ? "Félicitation ! Vous avez explosé vos objectifs hier 👏" : "Vous n'avez pas atteint vos objectifs hier. Continuez vos efforts, vous allez y arriver !"} </p>
        </div>
    );
}

export default WelcomeText;