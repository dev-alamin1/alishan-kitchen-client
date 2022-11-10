import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Authprovider";
import MyreviewRow from "./MyreviewRow";

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // this for review
  useEffect(() => {
    if (user?.uid) {
      fetch(`http://localhost:5000/feedback/user/${user?.uid}`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }
  }, [user?.uid]);

  // review delete handler

  const reviewDeleteHandler = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteSuccess) {
          toast.success("Delete success ");
          const remainingFoodService = reviews.filter(
            (review) => review._id !== id
          );
          setReviews(remainingFoodService);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Mimi Kitchen - Review</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {reviews.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <h2 className="text-5xl">No review found !</h2>
        </div>
      ) : (
        <div className="h-screen">
        <div className="flex flex-col px-10 md:px-20">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        {" "}
                        Service name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        {" "}
                        Service Photo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        {" "}
                        Review
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review, index) => (
                      <MyreviewRow
                        key={review._id}
                        index={index}
                        review={review}
                        reviewDeleteHandler={reviewDeleteHandler}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Myreview;