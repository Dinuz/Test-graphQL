import {authorModel} from "@/models/author"

const resolveQueryAuthor = async (parent, args) => {
  try {
    return await authorModel.findById(args.id);
  } catch(error) {
    console.log(error)
  }
}

const resolveTypeAuthor = async (parent, args) => {
  try {
    return await authorModel.findById(parent.authorId);
  } catch(error) {
    console.log(error)
  }
}

const resolveQueryAuthors = async (parent, args) => {
  try {
    return await authorModel.find({}); //note this return all books - empty object
  } catch(error) {
    console.log(error)
  }
}

const resolveMutationAddAuthor = async (parent, args) => {
  try {
    let author = await new authorModel({
      name: args.name,
      age: args.age
    });
    return await author.save();
  } catch(error) {
    console.log(error)
  }
}

export {resolveTypeAuthor, resolveQueryAuthor, resolveQueryAuthors, resolveMutationAddAuthor}
