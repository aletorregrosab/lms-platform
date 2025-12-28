import { type SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { categoryType } from "./categoryType";
import { courseType } from "./courseType";
import { instructorType } from "./instructorType";
import { lessonType } from "./lessonType";
import { moduleType } from "./moduleType";
import { enrollmentType } from "./enrollmentType";
import { lessonCompletionType } from "./lessonCompletionType";
import { studentType } from "./studentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    categoryType,
    courseType,
    enrollmentType,
    lessonCompletionType,
    instructorType,
    lessonType,
    moduleType,
    studentType,
  ],
};
