import css from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency}) {
    return (
        <>
            <td className={css["table-item"]}>{type}</td>
            <td className={css["table-item"]}>{amount}</td>
            <td className={css["table-item"]}>{currency}</td>
        </>
    );
}