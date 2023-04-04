import Image from "next/image"
import Link from "next/link"
import utilStyles from '../../styles/utils.module.css';



export default function BlogGallery ({posts}) {

    return(
        <>
        <h1 className={`text-center ${utilStyles.headingLg}`}>Blog</h1>

          <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3">
                        
          {posts.map(({ id, date, title, image }) => (
            <>
            <div class=" justify-center p-10">
              <Link href={`/posts/${id}`}>
             <Image
             priority
             className={"P-10"}
             src={`/images/${image}`}
             height={"500"}
             width={"500"}
             alt=""
         />          

            <h2>{title}</h2>
            <p>{date}</p>

            </Link>
            <br />
        
          </div>
          </>
          ))}
   </div>
   </>
       
    )
}