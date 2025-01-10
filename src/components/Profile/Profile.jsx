
import  css from "./Profile.module.css";


function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["profile-card"]}>
      <div className={css.user}>
        <img src={image} alt="User avatar" className={css.photo} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css["stats-list"]}>
        <li className={css["stats-item"]}>
          <span className={css["stats-title"]}>Followers</span>
          <span className={css["stats-data"]}>{followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["stats-title"]}>Views</span>
          <span className={css["stats-data"]}>{views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["stats-title"]}>Likes</span>
          <span className={css["stats-data"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
