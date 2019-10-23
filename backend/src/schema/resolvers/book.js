import {bookModel} from "@/models/book"


const resolveQueryBook = async (parent, args) => {
  try {
    return await bookModel.findById(args.id);
  } catch(error) {
    console.log(error)
  }
}

const resolveQueryBooks = async (parent, args) => {
  try {
    return await bookModel.find({}); //note this return all books - empty object
  } catch(error) {
    console.log(error)
  }
}

const resolveTypeBooks = async (parent, args) => {
  try {
    return await bookModel.find({authorId: parent.id});
  } catch(error) {
    console.log(error)
  }
}

const resolveMutationAddBook = async (parent, args) => {
  try {
    let book = await new bookModel({
      name: args.name,
      genre: args.genre,
      authorId: args.authorId
    });
    return await book.save();
  } catch(error) {
    console.log(error)
  }
}

export {resolveTypeBooks, resolveQueryBook, resolveQueryBooks, resolveMutationAddBook}
