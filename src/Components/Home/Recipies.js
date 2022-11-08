import React from "react";

const Recipies = () => {
  return (
    <div className="recipes-container p-5 mt-20 mb-10 md:mt-10 bg-slate-200 px-10 rounded-lg">

       <h2 className="text-center text-4xl mb-2">My Special Recipies</h2>
       <p className="text-center">Lot of spychy recipe here </p>

      <div className="grid md:grid-cols-3 gap-10 mt-5 mb-5">
        
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam quibusdam nam quos enim unde expedita delectus veritatis laudantium aliquid eligendi perspiciatis excepturi odit hic, iusto sunt facilis. Quod sed distinctio dolor labore. Iste exercitationem culpa, minus delectus aliquam, placeat obcaecati, esse inventore cumque eaque harum. Facere sit soluta nesciunt?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary btn-xs">Read More</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-auto bg-base-100 shadow-xl mt-4 md:mt-0">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae voluptates quos, laborum tenetur enim esse corrupti nemo quidem qui, fugit atque quasi libero inventore! Totam corporis sequi cupiditate, veniam non mollitia aut, doloribus at cum provident, quos rerum. Quae quam magni atque exercitationem excepturi consectetur dignissimos temporibus dolore libero!</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary btn-xs">Read More</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-auto bg-base-100 shadow-xl mt-4 md:mt-0">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste harum sint ex soluta tenetur odio aut culpa neque doloribus nihil reiciendis aliquid non sit explicabo velit commodi exercitationem, delectus autem hic. Atque temporibus aliquam quam, ex laudantium consequuntur nulla excepturi deserunt voluptas nisi odit, numquam nihil dolorum fugit nam! Obcaecati. </p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary btn-xs">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
