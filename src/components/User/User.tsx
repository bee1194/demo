"use client";

import MainContent from "@/components/Content/MainContent";
import { useDispatch, useSelector } from "@/redux";
import { fetchUser, fetchUser2, selectUser } from "@/redux/slices/userSlice";

export const User = () => {
  const dispatch = useDispatch();
  const { listing } = useSelector(selectUser);

  return (
    <MainContent>
      <div>
        <div className="space-x-6">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchUser2())}
          >
            Submit FetchUser2
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchUser())}
          >
            Submit fetchUser
          </button>
        </div>
        <div>
          {(listing.data?.results ?? []).map((item: any) => (
            <span
              key={item.id.value}
              className={listing.loading ? "loading" : undefined}
            >
              {item.name.title}. {item.name.first} {item.name.last}
            </span>
          ))}
        </div>
        <div>{listing.error}</div>
      </div>
    </MainContent>
  );
};
