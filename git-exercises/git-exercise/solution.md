# Git Excercise insights

Hashes, file based key-value storage and tree data structure, these are the key things behind git. 

Each tree node, commit and files has own unique 40 character 
long SHA-1 representation. These elements are added
 to a tree data structure which is persisted inside .git/objects folder.
 
##Inside .git
 
HEAD — reference to your current working branch.

objects — File based key-value storage that holds commits, tree nodes and file contents (in blob form).

hooks — Scripts that will be triggered with a Git event. eg, We can add a script which runs the test 
when before pushing the changes.

## Hard way to do `git add`

**`git add sample.txt` ==> `git hash-object -w sample.txt`**

`git hash-object` return is the SHA-1 checksum which is generated using the content and few meta info
like size, filename etc. The `-w` option writes it to the .git/objects folder.
The above command generate a file `.git/objects/f3/60b70ed8125fdfde9934ac0942548a25477971` 
This is how Git stores the content initially, as a single file per piece of content,
named with the SHA-1 checksum of the content and its header. 
The subdirectory is named with the first 2 characters of the SHA-1, and the filename is the remaining 38 characters.


`$ cat 60b70ed8125fdfde9934ac0942548a25477971`==>
`xK▒▒OR0aHII▒*` 
produce the binary.we can’t simply cat because Git uses different internal binary format than general encoding.

We need to use `git cat-file -p`. `-p` is for pretty printing the content. `-t` is for type.

**Note** :- We aren’t storing the filename in system just the content. 
This object type is called a blob. find type with git cat-file -t.

The help for `git cat-file` is very helpful.

```
$ git cat-file
usage: git cat-file (-t [--allow-unknown-type] | -s [--allow-unknown-type] | -e | -p | <type> | --textconv | --filters) [--path=<path>] <object>
   or: git cat-file (--batch[=<format>] | --batch-check[=<format>]) [--follow-symlinks] [--textconv | --filters]

<type> can be one of: blob, tree, commit, tag
    -t                    show object type
    -s                    show object size
    -e                    exit with zero when there's no error
    -p                    pretty-print object's content
    --textconv            for blob objects, run textconv on object's content
    --filters             for blob objects, run filters on object's content
    --path <blob>         use a specific path for --textconv/--filters
    --allow-unknown-type  allow -s and -t to work with broken/corrupt objects
    --buffer              buffer --batch output
    --batch[=<format>]    show info and content of objects fed from the standard input
    --batch-check[=<format>]
                          show info about objects fed from the standard input
    --follow-symlinks     follow in-tree symlinks (used with --batch or --batch-check)
    --batch-all-objects   show all objects with --batch or --batch-check
    --unordered           do not order --batch-all-objects output

```
###Tree Objects
solves the problem of storing the filename and also allows you to store a group of files together. 
 A single tree object contains one or more entries, each of which is the SHA-1 hash of a blob or subtree with its associated mode, type, and filename. 

##Different states of a file ( According to git)
untracked — You create a brand new file called names.txt in your project. The file is now in untracked state.

staged — You execute command `git add names.txt` . Now the file is staged. When a file is staged, its changes are stored in the index.

committed — You execute commit -m "names file added" . Now the change is committed. When changes in a file are committed its stored in the repository.

modified — You add the text hello world to the file and save the file. Now the file is modified.

###git reset
git reset, moves both the HEAD and branch refs to the specified commit.

The default invocation of git reset has implicit arguments of --mixed and HEAD. This means executing git reset
is equivalent to executing git reset --mixed HEAD. In this form HEAD is the specified commit.

### git stash
`git stash push -m "message"`

`git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]`

### `$ git revert <commit>`
Specifying a commit ID adds a new commit that cancels that commit.

The code will be in what it was when it wasn't committed.

The revert command opens an editor where you can edit the commit message.

When you perform a revert commit, you can optionally specify whether to edit the commit message.(`-e` option)

Do not edit commit message (do not open editor) (` git revert <commit> --no-edit`)

You can use the revert command to commit, but you can just set it back to index and not commit.
This is convenient because you can commit at once when reverting multiple commits.
`git revert <commit> --no-commit`


### git log options
#####Display the number of deleted and added lines for each file

`git log --numstat`

####Narrow down commits
######By date

` git log --since="4 days ago" --until="2015/01/22"`

######Representation number
`git log -n 10`

######Only specific files
`git log -- path/to/*.sh`

###### With a committer
`git log --author='kkunal'`

######In the commit log
`git log --grep='typo'`

######Merge commit only
`git log --merges`

######Excluding merge commit
`git log --no-merges`

### Tagging
Tags are ref's that point to specific points in Git history. Tagging is generally used to capture a point in history that is used for a marked version release (i.e. v1.0.1). A tag is like a branch that doesn’t change


### Resetting vs. reverting
Reverting has two important advantages over resetting. 

First, it doesn’t change the project history, which makes it a “safe” operation for commits that have already been published to a shared repository. 

Second, git revert is able to target an individual commit at an arbitrary point in the history, whereas git reset can only work backward from the current commit.


Useful Resource:
**https://git-scm.com/book/en/v2/Git-Internals-Git-Objects**
