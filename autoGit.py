# This program is a fast way to automatically save our progress in GitHub or any other git repository provider we use
# it uses os library to execute commands

import os


def auto_add():  # Adds all files to local repository
    os.system('git add .')
    return True


def auto_commit():  # Commits all changes to local repository
    os.system('git commit -m \'#Atuomatically commited by @phAutoGit\'')
    return True


def auto_push():  # Automatically pushes towards git remote
    os.system('git push origin master')
    return True


if (auto_add()):
    if (auto_commit()):
        auto_push()
