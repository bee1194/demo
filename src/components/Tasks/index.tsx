"use client";
import { useEffect, useState } from "react";

import DeleteButton from "@/components/common/buttons/DeleteButton";
import EditButton from "@/components/common/buttons/EditButton";
import ViewButton from "@/components/common/buttons/ViewButton";
import DetailLayout from "@/components/Tasks/DetailLayout";
import Status from "@/components/Tasks/Status";
import { ITask } from "@/models/task.model";
import { getTasks, selectTasks, useDispatch, useSelector } from "@/redux";
import { formatDate } from "@/utils/dateUtil";

export default function Tasks() {
  const dispatch = useDispatch();
  const { data: tasks, loading, error } = useSelector(selectTasks);

  const [taskDetail, setTaskDetail] = useState<ITask | null>(null);
  const [focusTye, setFocusType] = useState<"view" | "edit">("view");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <div className="p-4 bg-base-100 shadow rounded">
        <div className="overflow-x-auto">
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
              {tasks?.map((item, index) => (
                <tr key={item.id} className="hover">
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{formatDate(item.created_at)}</td>
                  <td>{item.assignee}</td>
                  <td>
                    <Status task={item} />
                  </td>
                  <td>
                    <div className="flex flex-row gap-1">
                      <ViewButton
                        onClick={() => {
                          setFocusType("view");
                          setTaskDetail(item);
                        }}
                      />
                      <EditButton
                        onClick={() => {
                          setFocusType("edit");
                          setTaskDetail(item);
                        }}
                      />
                      <DeleteButton />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DetailLayout type={focusTye} task={taskDetail} setTask={setTaskDetail} />
    </>
  );
}
