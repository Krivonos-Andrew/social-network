import {LinkList} from './NavData';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'


function LinkPath(props: { name: string, to: string, id: number }) {
  return (<li
    className={s.item}
    key={props.id}
  >
    <NavLink
      to={props.to}>
      {props.name}
    </NavLink>
  </li>);
}


const links: JSX.Element[] = LinkList.map((el) => {
  return (<LinkPath to={el.path} name={el.name} key={el.id} id={el.id}/>)
})

export const Navbar = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          {links}
          {/*{LinkList.map(el => (*/}
          {/*  <li*/}
          {/*    className={s.item}*/}
          {/*    key={el.key}>*/}
          {/*    <NavLink*/}
          {/*      to={el.path}>*/}
          {/*      {el.name}*/}
          {/*    </NavLink>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </nav>
    </>
  )
}