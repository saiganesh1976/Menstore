import React from "react";

const About = () => {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-4xl mb-6 text-center">About Us</h1>
      <div className=" text-center lg:px-48">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem
          fugiat possimus officiis expedita. Ab deleniti fugit doloremque? Sit
          harum natus voluptate ab, exercitationem culpa suscipit dicta aut
          fugiat voluptatem!
        </p>
      </div>
      <div className="mx-20 my-10">
        {/* <div className="mb-5 lg:grid grid-cols-2 gap-6">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Magnam beatae officia odit similique
            ducimus, iure consectetur, tempore atque aperiam id, commodi saepe
            minus aliquid laudantium optio! Aut, iste. Asperiores, quod.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Exercitationem laboriosam ut ea cum
            molestiae tempore, nesciunt optio quod excepturi, error quas, eos
            hic animi voluptatem. Velit laudantium explicabo facere optio?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum.
          </div>
        </div> */}

        <div className="lg:flex justify-between mb-5 bg-slate-400 rounded-lg p-10">
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">2024</h1>
            <p className="text-slate-200 px-5">MenStore Found</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">120+</h1>
            <p className="text-slate-200 px-5">People on the team</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">250k</h1>
            <p className="text-slate-200 px-5">Users on the platform</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">$70M</h1>
            <p className="text-slate-200 px-5">Worth Products</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">Our Missions</h2>
          <div>
            <div>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, et at, quae dolor vitae sapiente porro, nihil esse
                adipisci sed obcaecati officiis quia earum debitis dicta animi
                facere quidem provident?
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, et at, quae dolor vitae sapiente porro, nihil esse
                adipisci sed obcaecati officiis quia earum debitis dicta animi
                facere quidem provident?
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, et at, quae dolor vitae sapiente porro, nihil esse
                adipisci sed obcaecati officiis quia earum debitis dicta animi
                facere quidem provident?
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Address: 123 Fashion Street, Main City, City 10001</p>
          <p>Email: support@menstore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p>
            Follow us on social media, sign up for our newsletter, or reach out
            to us for more information. Stay updated with the latest trends,
            offers, and exclusive discounts from MenStore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
