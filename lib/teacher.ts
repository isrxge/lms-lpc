export const isTeacher = (userId?: string | null) => {
  const teacherIds = [
    process.env.NEXT_PUBLIC_TEACHER_ID_1,
    process.env.NEXT_PUBLIC_TEACHER_ID_2,
    // Add more teacher IDs if needed
  ];

  return userId ? teacherIds.includes(userId) : false;
};
