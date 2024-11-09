type NewAssign = ReturnType<typeof createNewAssign>

function createNewAssign<T>(initialValue: T): { [P in keyof T]: T[P] } {
  // implementation
  return {
    // implementation
  }
}
