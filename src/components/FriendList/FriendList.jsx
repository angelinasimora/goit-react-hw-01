import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({friends
}) {
    return (
        <ul className={css["friends-list"]}>
            {friends.map((friend) => (
                <li key={friend.id} className={css["friends-item"]}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}