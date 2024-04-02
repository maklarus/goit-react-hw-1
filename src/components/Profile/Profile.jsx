import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileWrapper}>
      <div className={css.avatarWrapper}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <div className={css.tagLocationWrapper}>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span>Followers</span>
          <span className={css.statsData}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span className={css.statsData}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span className={css.statsData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
