"use client";
import { useEffect } from "react";

import Badge from "@/components/common/Badge";
import DeleteButton from "@/components/common/buttons/DeleteButton";
import EditButton from "@/components/common/buttons/EditButton";
import ViewButton from "@/components/common/buttons/ViewButton";
import { getTasks, selectTask, useDispatch, useSelector } from "@/redux";

export default function TaskList() {
  const dispatch = useDispatch();
  const { get: tasks } = useSelector(selectTask);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="p-4 bg-base-100 shadow rounded">
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.data?.map((item, index) => (
              <tr key={item.id} className="hover">
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.created_at}</td>
                <td>{item.assignee}</td>
                <td>
                  <Badge />
                </td>
                <td>
                  <div className="flex flex-row gap-1">
                    <ViewButton />
                    <EditButton />
                    <DeleteButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
