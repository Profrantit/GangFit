import Link from "next/link";
import Image from "next/image";
export default function WorkoutCard({ workouts }) {
  const { title, slug, time, thumbnail } = workouts.fields;

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={700}
          height={400}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {time} mins to do</p>
        </div>
        <div className="actions">
          <Link href={"/workouts/" + slug}>
            <a>Do this</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            
          }
         
          }
          .content {
            background: #101820ff;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            margin: 0;
            position: relative;
            top: -40px;
            left: -10px;
            color: white;
          }
          .info {
            padding: 16px;
          }
          .info h4 {
            margin: 4px 0;
            text-transform: uppercase;
          }
          .info p {
            margin: 0;
            color: #f2aa4cff;
          }
          .actions {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
          }
          .actions a {
            color: #101820ff;
            background: #f2aa4cff;
            padding: 16px 24px;
            text-decoration: none;
          }
          .actions a:hover {
            color: #f2aa4cff;
            background: gray;
            padding: 16px 24px;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
