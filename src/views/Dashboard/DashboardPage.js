/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React from "react";
import NoteEditor from "./NoteEditor";
import PomodoroTimer from "./PomodoroTimer";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <PomodoroTimer />
      <NoteEditor />
    </div>
  );
}

export default DashboardPage;
