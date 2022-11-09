import React, { useContext, useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { AuthContext } from "../../Context/Authprovider";
import Myreviewrow from "./Myreviewrow";

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

  // this for load ,food service name under this review

  return (
    <div>
      {reviews.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <h2 className="text-5xl">No review found !</h2>
        </div>
      ) : (
        <table className="table p-4 bg-white shadow rounded-lg w-3/4 mx-auto mt-5">
          <thead>
            <tr>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Service name
              </th>

              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Service Photo
              </th>

              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Review
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <Myreviewrow key={review._id} index={index} review={review} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Myreview;
