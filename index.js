var root = ReactDOM.createRoot(document.getElementById("app"));
function F1() {
    const title = "STEP"
    const title2 = "STEP2"

    if (1 == 1)
        return <h2>qwerty1 {title}</h2>
    else
        return <h2>qwerty2 {title2}</h2>
}

function Func1() {
    const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

    return <div>
        <h1>Выберите день недели</h1>
        <select>
            <option value="" disabled selected>Выберите день</option>
            {days.map((day, index) => (
                <option key={index} value={day}>
                    {day}
                </option>
            ))}
        </select>
    </div>

}

function Func2() {
    const months = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ];

    return <div>
        <h1>Месяцы года</h1>
        <table>
            <thead>
                <tr>
                    <th>Месяц</th>
                </tr>
            </thead>
            <tbody>
                {months.map((month, index) => (
                    <tr key={index}>
                        <td>{month}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

function Func3() {
    const zodiacSigns = [
        'Овен', 'Телец', 'Близнецы', 'Рак',
        'Лев', 'Дева', 'Весы', 'Скорпион',
        'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
    ];

    return <div>
        <h1>Знаки зодиака</h1>
        <ul>
            {zodiacSigns.map((sign, index) => (
                <li key={index}>{sign}</li>
            ))}
        </ul>
    </div>
}

// class F2 extends React.Component {
// render() {
//     return <h2>qwerty1234</h2>;
// }
// }

root.render(
    <div>
        <Func1 />
        <Func2 />
        <Func3 />

    </div>
);


