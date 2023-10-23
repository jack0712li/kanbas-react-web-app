function findIndex (){
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <h4>FindIndex</h4>
            <p>numberArray1.findIndex(a =&gt a === 4) = {fourIndex}</p>
            <p>stringArray1.findIndex(a =&gt a === 'string3') = {string3Index}</p>
        </div>
    );
}
export default findIndex;