import "./App.css";
import { useState } from "react";
function App() {
    const [cofa, setCofa] = useState(0);
    const [cofb, setCofb] = useState(0);
    const [cofc, setCofc] = useState(0);
    const [result1, setResult1] = useState(0);
    const [result2, setResult2] = useState(0);
    const changeOne = (e) => {
        setCofa(parseInt(e.target.value));
    };
    const changeTwo = (e) => {
        setCofb(parseInt(e.target.value));
    };
    const changeThree = (e) => {
        setCofc(parseInt(e.target.value));
    };
    return (
        <div className="wrap">
            <div className="values">
                <div className="input">
                    <input onChange={changeOne} type="number" />
                    <input onChange={changeTwo} type="number" />
                    <input onChange={changeThree} type="number" />
                </div>
                <div className="p">
                    <p>Коэфицент a</p>
                    <p>Коэфицент b</p>
                    <p>Коэфицент c</p>
                </div>
            </div>

            <button
                onClick={() => {
                    const des = cofb ** 2 - 4 * cofa * cofc;
                    if (des >= 0) {
                        setResult1((-cofb - Math.sqrt(des)) / (cofa * 2));
                        setResult2((-cofb + Math.sqrt(des)) / (cofa * 2));
                    } else {
                        setResult2("Ошибка");
                        setResult1("Ошибка");
                    }
                }}
            >
                Посчитать
            </button>
            <p className="result">
                Корень1={result1}, Корень2={result2}
            </p>
        </div>
    );
}

export default App;
