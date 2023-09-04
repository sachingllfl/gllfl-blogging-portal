import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import Breadcrums from "@/app/components/Breadcrums";

const page = () => {
  return (
    <>
      <Breadcrums>
        <Link href={"/"}>Home</Link> <FiChevronRight />
        Page
      </Breadcrums>

      <section>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Page Coming Soon</h1>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              veritatis corporis magni, aspernatur vitae illo inventore nulla
              doloribus ullam laboriosam tempora nesciunt doloremque consequatur
              vero omnis consectetur laborum velit impedit sapiente magnam
              pariatur natus, id sed? Numquam ipsam, esse, iusto eveniet sequi
              ex cupiditate suscipit veniam, quidem et quam placeat! Iusto,
              sapiente aspernatur delectus possimus laudantium qui. Modi totam
              animi reprehenderit minima similique fuga, dicta doloribus soluta
              nihil, asperiores perferendis laudantium delectus assumenda quia
              nulla consequatur inventore maxime sed saepe ex corrupti adipisci
              est aperiam in? Blanditiis libero amet laudantium quasi ducimus?
              Debitis minima error ipsam neque, inventore soluta qui.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ad
              dolorum expedita fuga sit rem aperiam architecto dolor, animi quod
              natus veritatis aut quisquam aliquid culpa temporibus at fugiat
              obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              laudantium repudiandae laborum dicta quod ea tenetur illo
              similique excepturi iure nam aspernatur asperiores nesciunt eum
              voluptatibus quo iusto iste, suscipit cum eveniet pariatur quos
              rerum quasi voluptatem. Maxime, fuga modi mollitia vitae facere
              natus laudantium libero vero officia aliquid magni! Qui, atque
              autem eligendi est, eum corporis, soluta nobis ipsam impedit quo
              optio laudantium reiciendis molestiae animi! Iste officiis minima
              cum voluptatem voluptas soluta eius possimus, animi consequuntur
              ipsam distinctio.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              maxime cupiditate obcaecati. Quo tenetur distinctio odit aliquam
              eaque quis repellendus similique officia, exercitationem
              voluptates voluptas molestiae dignissimos quidem hic beatae.
              Deserunt labore sit mollitia ullam eius, provident repudiandae
              impedit reiciendis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
