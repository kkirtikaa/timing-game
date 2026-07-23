export default function ResultModel({ref,result,targetTime}){
    return(
    <dialog ref = {ref} className="result-modal">
        <h2>you {result}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped time timer with <strong>X seconds left</strong></p>
        <form method="dialog"> {/*method dialog is used because when we click on this botton entire dialog tag will close*/}
            <button>Close</button>

        </form>
    </dialog>
    );
}