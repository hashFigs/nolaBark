import Layout from "../components/layout"
import styles from '../components/layout.module.css';
import Image from "next/image";


export default function Services({ allPostsData }) {
return(
    <>
    <Layout home>    
            <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-64">
                 <Image
                      priority
                      src="/images/possom.png"
                     
                      height={144}
                      width={144}
                      alt=""
                    />
                </div>
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24">
                
                <h1>DOG WALKING & DROP-IN VISITS</h1>
                <p>Book appointments as you need them or set a recurring weekly schedule. Pet care journals are sent to your phone after every visit with their GPS tracked route, photos, and notes from the walker.</p>
                <ul>
                <li>15 MINUTES: $19</li>
                <li>30 MINUTES: $29</li>
                <li>45 MINUTES: $39</li>
                <li>60 MINUTES: $49</li>
                <li>ADDITIONAL PET: FREE</li>
                </ul>
                </div>
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24">
                <h1>AIR BED & BISCUIT</h1>
                <p>For a boarding alternative to the kennel at the same price, your dog can stay with us and enjoy all the comforts of home! We have a very playful pup, so guests must be current on all vaccinations and dog-friendly. Space is limited, advance reservations highly recommended.</p>

                <ul>
                    <li>ONE DOG – $60/NIGHT</li>
                    <li>ADDITIONAL DOG – $30/NIGHT</li>
                </ul>
                </div>
            </div>
            
            
            
            <div className={styles.container}>  
            </div>
    </Layout>
    </>
)
}