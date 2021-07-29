import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import styles from "../styles/Center.module.css";
export default function CenterCom() {
  return (
    <>
      <Paper className={styles.centerC} variant="elevation">
        <div className={styles.center}>
          <Typography variant="h1">some content</Typography>
          <Typography variant="h2">some more</Typography>
          <Typography variant="body1">even more text</Typography>
          <div className={styles.centerR}>
            <Paper className={styles.centerImg}>
              <img
                src="/fottie.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </Paper>
            <div>
              <div className={styles.centerT}>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
              </div>
              <Link href="/workout">
                <a className={styles.btn}>alooooot of text</a>
              </Link>
            </div>
          </div>
          /* */
          <div className={styles.centerL}>
            <Paper className={styles.centerImg}>
              <img
                src="/fottie.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </Paper>
            <div>
              <div className={styles.centerT}>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
                <Typography variant="body1" align="center">
                  this is some text next to img{" "}
                </Typography>
              </div>
              <Link href="/workout">
                <a className={styles.btn}>alooooot of text</a>
              </Link>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
