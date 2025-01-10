import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ items:transactions }) {
    return (
        <table className={css.table}>
            <thead className={css["table-titles"]}>
                <tr className={css["table-first-row"]}>
                    <th className={css["table-item"]}>Type</th>
                    <th className={css["table-item"]}>Amount</th>
                    <th className={css["table-item"]}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) => (
                <tr key={transaction.id} className={css["table-row"]}>
                    <TransactionItem
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                </tr>
            ))} 
            </tbody>
       </table>
    
    );
}