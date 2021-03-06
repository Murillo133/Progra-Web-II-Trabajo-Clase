<template>
    <div class="container">
        <h1>Authors</h1>

        <div class="mb-4" v-if="show_form">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Name here"
                    v-model="newAuthor.name"
                />
            </div>
            <div class="form-group">
                <label for="birth_date">Birth date</label>
                <input
                    type="date"
                    class="form-control"
                    id="birth_date"
                    v-model= newAuthor.birth_date
                />
            </div>
            <div class="form-check">
                <label for="birth_date">Genre</label>
                <select class="custom-select" v-model="newAuthor.genre">
                    <option selected>Choose a genre</option>
                    <option>Man</option>
                    <option>Woman</option>
                    <option>Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="nationality">Nationality</label>
                <input
                    type="text"
                    class="form-control"
                    id="nationality"
                    aria-describedby="emailHelp"
                    placeholder="Name here"
                    v-model="newAuthor.nationality"
                />
            </div>
            <hr />
            <button v-if="showButtonSave" type="button" class="btn btn-primary" @click="save">
                Save
            </button>
            <button v-if="!showButtonSave" type="button" class="btn btn-primary" @click="update">
                Save edit
            </button>
        </div>

        <table class="table" v-if="this.authors && this.showButtonSave">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Genre</th>
                <th>Nationality</th>
                <th>
                    <button
                        v-if="!show_form"
                        class="btn btn-success"
                        @click="show_form = true"
                    >
                        New
                    </button>
                </th>
            </tr>
            <tr :key="author.id" v-for="author in this.authors.data">
                <td>{{ author.id }}</td>
                <td>{{ author.name }}</td>
                <td>{{ author.birth_date }}</td>
                <td>{{ author.genre }}</td>
                <td>{{ author.nationality }}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn btn-danger"
                            @click="remove(author.id)"
                        >
                            Delete
                        </button>
                        <button class="btn btn-primary" @click="edit(author)">
                            Edit
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { AUTHORS_QUERY } from "./queries.js";
import { CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR } from "./mutations.js";

export default {
    apollo: {
        authors: {
            query: AUTHORS_QUERY
        }
    },
    data() {
        return {
            newAuthor: {
                name: "",
                birth_date: "",
                genre: "",
                nationality: ""
            },
            updateAuthor: {
                id: null,
                name: "",
                birth_date: "",
                genre: "",
                nationality: ""
            },
            show_form: false,
            showButtonSave: true
        };
    },
    methods: {
        reset() {
            this.show_form = false;
            this.showButtonSave = true;
            this.name = "";
            this.birth_date = "";
            this.genre = "";
            this.nationality = "";
        },
        remove(id) {
            if (confirm("Are you sure?")) {
                this.$apollo
                    .mutate({
                        mutation: DELETE_AUTHOR,
                        variables: { id: id }
                    })
                    .then(response => {
                        this.$apollo.queries.authors.refetch();
                        this.reset();
                    });
            }
        },
        save() {
            this.$apollo
                .mutate({
                    mutation: CREATE_AUTHOR,
                    variables: {
                        author: this.newAuthor
                    }
                })
                .then(response => {
                    this.$apollo.queries.authors.refetch();
                    this.reset();
                });
        },
        update() {
        if (confirm(this.updateAuthor.id)) {
            (this.updateAuthor.name = this.newAuthor.name),
            (this.updateAuthor.birth_date = this.newAuthor.birth_date),
            (this.updateAuthor.genre = this.newAuthor.genre),
            (this.updateAuthor.nationality = this.newAuthor.nationality);
           this.$apollo
                .mutate({
                    mutation: UPDATE_AUTHOR,
                    variables: {
                        author: this.updateAuthor
                    }
                })
                .then(response => {
                    this.$apollo.queries.authors.refetch();
                    this.reset();
                });
             }
        },

        edit(author) {
            this.showButtonSave = false;
            this.show_form = true;
            (this.updateAuthor.id = author.id),
            (this.newAuthor.name = author.name),
            (this.newAuthor.birth_date = author.birth_date),
            (this.newAuthor.genre = author.genre),
            (this.newAuthor.nationality = author.nationality);
        }
    }
};
</script>
